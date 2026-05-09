import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryResource {
    public_id: string;
    asset_id: string;
    format: string;
    width: number;
    height: number;
    bytes: number;
    url: string;
    secure_url: string;
    created_at: string;
}

interface CloudinaryResourcesResponse {
    resources: CloudinaryResource[];
    next_cursor?: string;
}

export const getAllPublicIds = async (): Promise<string[]> => {
    const results: string[] = [];
    let nextCursor: string | undefined = undefined;

    do {
        const response = await cloudinary.api.resources({
            resource_type: 'image',
            type: 'upload',
            max_results: 500,
            ...(nextCursor && { next_cursor: nextCursor }),
        }) as CloudinaryResourcesResponse;

        results.push(...response.resources.map((r: CloudinaryResource) => r.public_id));
        nextCursor = response.next_cursor;
    } while (nextCursor);

    return results;
};

// const publicIds: string[] = await getAllPublicIds();
// console.log(publicIds);