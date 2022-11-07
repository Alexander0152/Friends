import React, { useMemo, useRef } from 'react';

import './friendDetailsCard.scss'
import closeButton from 'assets/icons/closeButton.svg';
import people from 'assets/images/people.png'

interface Props {
    photos: string[];
}

export const FriendDetailsContentPhotos = ({ photos }: Props) => {

    const imageModal = useRef(null);

    const handlePhotoClick = () => {
        console.log(imageModal);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        imageModal.current.classList.add("visible");
    }

    const handleCloseClick = () => {
        console.log(imageModal);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        imageModal.current.classList.remove("visible");
    }

    const photosList = useMemo(() =>
        photos.map((photo) => {
            return (
                <div key={photo} className="friend-details-photos__image" onClick={handlePhotoClick}>
                    <img src={photo}/>
                </div>
            );
        }), [photos]);


    return (
        <div className="friend-details-photos">
            {photos && photosList}

            <div onClick={handleCloseClick} className="friend-details-photos__button-close">
                <img src={closeButton}/>
            </div>
            <div ref={imageModal} className="friend-details-photos__modal">
                <div className="friend-details-photos__modal-content">
                    <img src={people}/>
                </div>
            </div>

        </div>
    );
}
