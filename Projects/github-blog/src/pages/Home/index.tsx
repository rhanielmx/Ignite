import { FormContainer, HomeContainer, PostBody, PostCard, PostHeader, PostsContainer, ProfileContainer, ProfileDetails } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useFormAction, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import {
    useQuery,
    useQueryClient,
} from 'react-query'
import axios from "axios";
import { useState } from "react";
import { formatDistanceToNow, formatRelative, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type RepositoryIssueProps = any

interface QueryProps {
    items: RepositoryIssueProps[]
    incomplete_results: boolean
    total_count: number
}

export function Home() {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("")
    const queryClient = useQueryClient()

    const repositoryOwner = "facebook"
    const repositoryName = "react"
    const MAX_BODY_SIZE = 181
    const MAX_TITLE_SIZE = 40

    const getIssues = async (repositoryOwner: string, repositoryName: string): Promise<QueryProps> => {
        const response = await axios.get(`https://api.github.com/search/issues?q=${searchText}repo:${repositoryOwner}/${repositoryName}`)
        return response.data
    }

    const getUser = async (repositoryOwner: string)=> {
        const response = await axios.get(`https://api.github.com/users/${repositoryOwner}`)
        return response.data
    }

    const { data: user } = useQuery('user', () => getUser(repositoryOwner))

    const query = useQuery<QueryProps>(['issues', searchText], () => getIssues(repositoryOwner,repositoryName))

    const handlePostClick = (postId: number) => {
        let path = `post/${postId}`;
        navigate(path);
    }

    return (
        <HomeContainer>
            <ProfileContainer>
                <img src={user?.avatar_url} alt="" />
                <ProfileDetails>
                    <div >
                        <p className="name_github">
                            <span className="name">{user?.name}</span>
                            <a href={user?.html_url} className="github">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </p>
                        <p className="bio">{user?.bio}</p>
                        <p className="info">
                            <span><FontAwesomeIcon icon={faGithub} />{user?.login}</span>
                            <span><FontAwesomeIcon icon={faBuilding} />{user?.company ?? ""} </span>
                            <span><FontAwesomeIcon icon={faUserGroup} />{user?.followers} seguidores</span>
                        </p>
                    </div>
                </ProfileDetails>
            </ProfileContainer>
            <FormContainer>
                <p>
                    <strong>Publicações</strong>
                    <span>{query?.data?.items.length} publicações</span>
                </p>

                <input
                    type="text" placeholder="Buscar conteúdo"
                    value={searchText} onChange={(e) => setSearchText(e.target.value)}
                />
            </FormContainer>
            <PostsContainer>
                {query.data?.items.map(issue => (
                    <PostCard key={issue.id} onClick={() => handlePostClick(issue.number)}>
                        <PostHeader>
                            <span title={issue.title}>
                                {issue.title.length > MAX_TITLE_SIZE ?
                                    `${issue.title.substring(0, MAX_TITLE_SIZE)}...` : issue.title
                                }
                            </span>
                            <span>
                                {formatDistanceToNow(new Date(issue.created_at), {
                                    addSuffix: true,
                                    locale: ptBR,
                                })}
                            </span>
                        </PostHeader>
                        <PostBody >
                            <ReactMarkdown disallowedElements={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}>
                                {issue.body?.length > MAX_BODY_SIZE ?
                                    `${issue.body?.substring(0, MAX_BODY_SIZE)}...` : issue.body
                                }
                            </ReactMarkdown>
                        </PostBody>
                    </PostCard>
                ))}
            </PostsContainer>
        </HomeContainer>
    )
}