import React from "react";
import styled from 'styled-components';
import SlotBookContainer from './SlotBookContainer'
import { Layout, Typography, Button } from 'antd';
import { List, Avatar } from 'antd';
import { RightOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Title, Paragraph } = Typography;
const { Header, Content } = Layout;

const HeaderContainer = styled.div`
    color:#FFFFFF
`;

const UsersListContainer = styled.div`
    padding:5vh
`;

const ListItemContainer = styled.div`
`;

const CalendarContainer = styled.div`
    padding:5vh
`;

const AvatarContainer = styled.div`
`;

const UserDataContainer = styled.div`
    padding:3vh
`;

export default class HomePage extends React.Component {

    constructor(props){
        super(props)
        this.state={
            user:null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = value => {
        console.log('value',value)
        this.props.handlePageChange(value)
    };

    handleUser = user => {
        console.log('value',user)
        this.setState({
            user:user
        })
    };


    render() {
        const { usersList } = this.props;
        return (
        <Layout>
            <Header>
                <HeaderContainer>
                    ReqResApiTask
                </HeaderContainer>
            </Header>
            <Content style={{padding:'3vh',display:'flex',justifyContent:'space-between'}}>
                <UsersListContainer>
                    <ListItemContainer>
                        {
                            usersList && usersList.data !== 0 && (
                            <List>
                                {
                                    usersList.data.map((user,index)=>(
                                    <List.Item style={{display:'flex',justifyContent:'space-between'}} key={index}>
                                        <AvatarContainer>
                                            <Avatar src={user.avatar} shape="circle" size="large" />
                                        </AvatarContainer>
                                        <UserDataContainer>
                                            <Typography>
                                                <Title>{user.first_name + " " + user.last_name}</Title>
                                                <Paragraph>
                                                    {user.email}
                                                </Paragraph>
                                            </Typography>
                                        </UserDataContainer>
                                        <Button shape="circle" icon={<RightOutlined />} style={{cursor:"pointer"}} onClick={this.handleUser.bind(this,user)}/>
                                    </List.Item>
                                    ))
                                }
                            </List>
                            )
                        }
                    </ListItemContainer>
                    {/* <Pagination defaultCurrent={1} total={50} onChange={this.handleChange}/> */}
                </UsersListContainer>
                <CalendarContainer>
                    <SlotBookContainer />
                </CalendarContainer>
            </Content>
        </Layout>
        );
    }
}
