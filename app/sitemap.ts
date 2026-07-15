import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "http://192.168.0.29:3001",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        }
    ]   
}