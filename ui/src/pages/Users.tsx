import styled from 'styled-components';
import UserCard from '../components/card/UserCard';
import Loading from '../components/Loading';
import { useGetUsersQuery } from '../redux/api/usersApi';
import { User } from '../redux/types/user.type';
import { Container } from '../global-styles/Container';
import { Wrapper } from '../global-styles/Wrapper';

const UsersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
`;

const Users: React.FC = () => {
    const {
        data: users,
        isFetching,
        isLoading,
    } = useGetUsersQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });
    return (
        <>
            {(isFetching || isLoading) && <Loading />}
            <Container>
                <div></div>
                <Wrapper>
                    <UsersWrapper>
                        {users
                            ?.filter((user: User) => user.id < 9)
                            .map((user: User) => (
                                <UserCard key={user.id} user={user} />
                            ))}
                    </UsersWrapper>
                </Wrapper>
                <div></div>
            </Container>
        </>
    );
};

export default Users;
