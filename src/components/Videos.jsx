import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from ".";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {(item?.id?.videoId) ? (<VideoCard videoDetail={item} />) : null}
          {(item?.id?.channelId) ? (<ChannelCard channelDetail={item} />) : null}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
