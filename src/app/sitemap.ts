import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://schoolreach.com.au";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/naplan-oc-estimator`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/naplan-selective-estimator`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/reserve-list`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/reserve-list/oc`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/reserve-list/selective`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    // Chinese locale
    { url: `${baseUrl}/zh`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/zh/naplan-oc-estimator`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/zh/naplan-selective-estimator`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/zh/reserve-list`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/zh/reserve-list/oc`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/zh/reserve-list/selective`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
}
