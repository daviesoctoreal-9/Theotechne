import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("programme.overview", () => {
  it("returns the branded programme and eight curriculum modules", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const overview = await caller.programme.overview();
    expect(overview.programme.institute).toBe("Theotechne Institute for Faith and Technology");
    expect(overview.programme.contactPhone).toBe("+2349033462784");
    expect(overview.modules).toHaveLength(8);
    expect(overview.modules[0]?.title).toBe("Meeting AI for the First Time");
    expect(overview.totalLessons).toBe(24);
  });
});
