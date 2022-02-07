import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { retrieversPhotos } from './RetrieversPhotos/retrieversPhotos';

const RetrieversGallery = () => {
  return (
    <Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={1}>
        {retrieversPhotos.map((item, index) => (
          <Stack key={index}>
            <img
              src={`${item.image}?w=162&auto=format`}
              srcSet={`${item.image}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </Stack>
        ))}
      </Masonry>
    </Box>
  );
};

export default RetrieversGallery;
