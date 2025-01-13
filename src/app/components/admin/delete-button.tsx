"use client";

import { useRouter } from 'next/navigation'
import { FaTrash } from "react-icons/fa";

interface DeleteButtonProps {
    videoId: string;
}

export default function DeleteButton({ videoId }: DeleteButtonProps) {
    const router = useRouter();
    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/mysql/delete-video`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ videoId }),
            });

            const data = await response.json();

            if (data.success) {
                router.refresh()
            } else {
                console.error('Failed to delete video:', data.error);
            }
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    return (
        <button className="bg-transparent text-white border-0" onClick={handleDelete}>
            <FaTrash />
        </button>
    );
}
