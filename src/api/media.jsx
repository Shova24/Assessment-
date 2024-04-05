import { useQuery } from "@tanstack/react-query";

import { BaseAPI } from "../lib/api-config";
import ErrorHandler from "../lib/error-handler";

export const usePhotoList = () =>
  useQuery({
    queryKey: ["photos"],
    queryFn: () =>
      BaseAPI.get("/curated", {
        headers: { Authorization: import.meta.env.VITE_APP_API_KEY },
      }),
    select: (data) => data?.data?.photos,
    onError: ErrorHandler,
  });
