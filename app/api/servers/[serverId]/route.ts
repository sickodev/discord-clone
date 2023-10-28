import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { request } from "http";
import { NextResponse } from "next/server";

export async function PATCH(
    request: Request,
    { params }: { params: { serverId: string } }
) {
    try {
        const profile = await currentProfile();
        const { name, imageUrl } = await request.json();

        if (!profile)
            return new NextResponse("Unauthentorized", { status: 401 });

        const server = await db.server.update({
            where: {
                id: params.serverId,
                profileId: profile.id,
            },
            data: {
                name,
                imageUrl,
            },
        });
        return NextResponse.json(server);
    } catch (error) {
        console.log("[SERVER_ID_PATCH] Error: " + error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
