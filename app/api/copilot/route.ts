import {
	CopilotRuntime,
	GroqAdapter,
	copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import type { NextRequest } from "next/server";

const serviceAdapter = new GroqAdapter({
	model: "llama-3.2-1b-preview",
});

const runtime = new CopilotRuntime();

export const POST = (req: NextRequest) => {
	const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
		runtime,
		serviceAdapter,
		endpoint: req.nextUrl.pathname,
	});

	return handleRequest(req);
};
