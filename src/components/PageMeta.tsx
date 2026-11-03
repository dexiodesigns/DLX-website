import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { defaultPageMeta, pageMeta } from "../constants/pageMeta";

export default function PageMeta() {
    const { pathname } = useLocation();

    useEffect(() => {
        const key = pathname.toLowerCase().replace(/\/+$/, "") || "/";
        const { title, description } = pageMeta[key] ?? defaultPageMeta;

        document.title = title;

        let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (!tag) {
            tag = document.createElement("meta");
            tag.name = "description";
            document.head.appendChild(tag);
        }
        tag.content = description;
    }, [pathname]);

    return null;
}
