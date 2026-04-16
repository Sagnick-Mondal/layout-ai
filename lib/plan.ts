import puter from "@heyputer/puter.js";

export const PLAN_LIMITS = {
  free: 3,
  solo: 50,
  team: 300,
};

export const getUserPlan = async () => {
  try {
    const user = await puter.auth.getUser();
    if (!user) return "free";

    const plan = await puter.kv.get(`plan:${user.uuid}`);
    return plan || "free";
  } catch {
    return "free";
  }
};

export const getUserUsage = async () => {
  const user = await puter.auth.getUser();
  if (!user) return 0;

  return Number(await puter.kv.get(`usage:${user.uuid}`)) || 0;
};

export const incrementUsage = async () => {
  const user = await puter.auth.getUser();
  if (!user) return;

  const current = await getUserUsage();
  await puter.kv.set(`usage:${user.uuid}`, current + 1);
};

export const canUseFeature = async () => {
  const plan = await getUserPlan();
  const usage = await getUserUsage();

  return usage < PLAN_LIMITS[plan as keyof typeof PLAN_LIMITS];
};