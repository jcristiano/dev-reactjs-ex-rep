import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Dialog,  
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageGalleryService from '../../services/ImageGalleryService';

interface Image {
  url: string;
  alt: string;
}

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GalleryCard = styled(Card)`
  width: 300px;
  margin: 10px;
  position: relative;
  transition: box-shadow 0.3s; /* Adiciona uma transição suave */
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Adiciona um contorno mais intenso */
  }
`;


const DeleteButton = styled(IconButton)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const ImageGallery: React.FC = () => {

  const [ thumbs, setThumbs ] = useState<Image[]>([]);
  const [ showConfirmDelete, setShowConfirmDelete ] = useState<boolean>(false);

  useEffect( () => {
    const fetchDados = async () => {
        const dadosAPI = await ImageGalleryService.listarThumbs();
        setThumbs(dadosAPI.imagens);
    }

    fetchDados();
  }, []);

  const handleConfirmDelete = () => {
    setShowConfirmDelete(true);
  }

  return (
    <GalleryContainer>
      {thumbs.map((thumb, index) => (
        <GalleryCard key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={thumb.url}
              alt={thumb.alt}
            />
            <CardContent>
              {/* You can add additional content here if needed */}
            </CardContent>
          </CardActionArea>
          <DeleteButton onClick={handleConfirmDelete}>
            <DeleteIcon />
          </DeleteButton>
        </GalleryCard>
      ))}
      <Dialog open={showConfirmDelete} onClose={() => {}}>
        <DialogTitle>Deseja remover a ilustração</DialogTitle>
        <DialogContent>
          Tem certeza que deseja remover a ilustração
        </DialogContent>
        <DialogActions>
          <Button onClick={ () => setShowConfirmDelete(false) }>Nao</Button>
          <Button onClick={ () => setShowConfirmDelete(false) }>Sim</Button>
        </DialogActions>
      </Dialog>
    </GalleryContainer>
  );
};

export default ImageGallery;

export type {
    Image
}
