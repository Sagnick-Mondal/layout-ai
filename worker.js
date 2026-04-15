export default {
  async fetch(request) {
    const url = new URL(request.url);

    // CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }

    if (!globalThis.projects) {
      globalThis.projects = [];
    }

    if (url.pathname === "/api/projects/list") {
      return new Response(JSON.stringify({ projects: globalThis.projects }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    if (url.pathname === "/api/projects/save" && request.method === "POST") {
      const body = await request.json();
      const project = body.project;

      globalThis.projects.unshift(project);

      return new Response(JSON.stringify({ project }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    if (url.pathname === "/api/projects/get") {
      const id = url.searchParams.get("id");

      const project = globalThis.projects.find(p => p.id === id);

      return new Response(JSON.stringify({ project }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};