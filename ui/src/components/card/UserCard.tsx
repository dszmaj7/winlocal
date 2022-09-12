import {
    faBuilding,
    faEnvelope,
    faGlobe,
    faMapMarkerAlt,
    faPhone,
    faSignsPost,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router';
import { setUser } from '../../redux/features/userSlice';
import { useAppDispatch } from '../../redux/store';
import { User } from '../../redux/types/user.type';
import { CardAvatar, CardContainer, CardUser, CardUserData, CardUsername } from './styles';

interface Props {
    user: User;
}

const UserCard: React.FC<Props> = React.memo(({ user }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onCardClick = (user: User) => {
        dispatch(setUser(user));
        navigate(`user/${user.id}`);
    };

    return (
        <CardContainer onClick={() => onCardClick(user)}>
            <CardAvatar icon={faUserCircle} />
            <CardUser>{user.name}</CardUser>
            <CardUsername>{user.username}</CardUsername>
            <CardUserData>
                <div>
                    <i>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                    <span>{user.email}</span>
                </div>
                <div>
                    <i>
                        <FontAwesomeIcon icon={faPhone} />
                    </i>
                    <span>{user.phone}</span>
                </div>
                <div>
                    <i>
                        <FontAwesomeIcon icon={faGlobe} />
                    </i>
                    <span>{user.website}</span>
                </div>
                <div>
                    <i>
                        <FontAwesomeIcon icon={faBuilding} />
                    </i>
                    <span>{user.company?.name}</span>
                </div>
                <div>
                    <i>
                        <FontAwesomeIcon icon={faSignsPost} />
                    </i>
                    <span>
                        {user.address?.street} {user.address?.suite}
                    </span>
                </div>
                <div>
                    <i>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </i>
                    <span>
                        {user.address?.city}, {user.address?.zipcode}
                    </span>
                </div>
            </CardUserData>
        </CardContainer>
    );
});

UserCard.displayName = 'UserCard';

export default UserCard;
