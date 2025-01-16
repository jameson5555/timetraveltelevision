export type Video = {
    decade: string;
    description: string;
    video_id: string;
}

export type DecadeListItem = {
    decade: string;
    videos: Video[];
}

export type User = {
  id: string;
  name: string;
  password: string;
};