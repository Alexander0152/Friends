import React, { useMemo, useRef, useState } from 'react';

import './friendDetailsCard.scss'
import closeButton from 'assets/icons/closeButton.svg';

interface Props {
    photos: string[];
}

export const FriendDetailsContentPhotos = ({ photos }: Props) => {

    const [selectedPhoto, setSelectedPhoto] = useState('');
    const imageModal = useRef(null);

    const handlePhotoClick = (photo: string) => {
        setSelectedPhoto(photo);
        (imageModal.current as unknown as HTMLDivElement).classList.add("visible");
    }

    const handleCloseClick = () => {
        (imageModal.current as unknown as HTMLDivElement).classList.remove("visible");
    }

    const photosList = useMemo(() =>
        photos.map((photo, index) => {
            return (
                <div
                    key={photo} className="friend-details-photos__image"
                    onClick={() => handlePhotoClick(photo)}>
                    <img data-testid={`friend-details-content-photos${index}`} src={photo}/>
                </div>
            );
        }), [photos]);


    return (
        <div data-testid="friend-details-content-photos" className="friend-details-photos">
            {photos && photosList}

            <div onClick={handleCloseClick} className="friend-details-photos__button-close">
                <img src={closeButton}/>
            </div>
            <div ref={imageModal} className="friend-details-photos__modal">
                <div className="friend-details-photos__modal-content">
                    <img src={selectedPhoto}/>
                </div>
            </div>

        </div>
    );
}
