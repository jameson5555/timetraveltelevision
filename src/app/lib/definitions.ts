export type Video = {
    decade: string;
    description: string;
    id: string;
}

export type DecadeListItem = {
    decade: string;
    videos: Video[];
}