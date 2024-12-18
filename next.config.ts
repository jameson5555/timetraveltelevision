import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        host: 'localhost',
        port: '3306',
        user: 'ttt_jameson', // production user
        password: 'Tim3Trav3l!', // production password
        user_dev: 'root', // local user
        password_dev: 'suupD00d', // local password
        database: 'ttt_videos',
    },
};

export default nextConfig;
