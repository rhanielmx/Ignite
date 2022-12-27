import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import { LinksContainer, PostBody, PostContainer, PostInfo } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export function Post() {
    const { postId } = useParams()

    const { data, isSuccess } = useQuery(['issue', postId], () => getIssueByNumber(postId ?? ""))

    const getIssueByNumber = async (postId: string) => {

        const response = await axios.get(`https://api.github.com/repos/facebook/react/issues/${postId}`)
        //const response = await axios.get(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1`)
        return response.data
    }


    return (
        isSuccess && (<PostContainer>
            <PostInfo>
                <div>
                    <a href="javascript:history.back()"> <FontAwesomeIcon icon={faChevronLeft} /> Voltar</a>
                    <a href={data?.html_url}>Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                <span>{data?.title}</span>
                <LinksContainer>
                    <a href="">
                        <span>
                            <FontAwesomeIcon icon={faGithub} />
                            {data?.user.login}
                        </span>
                    </a>

                    <span>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        {formatDistanceToNow(new Date(data?.created_at), {
                            addSuffix: true,
                            locale: ptBR,
                        })}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faComment} />
                        {data?.comments === 1 ? `${data?.comments} comentário` : `${data?.comments} comentários`}
                    </span>
                </LinksContainer>
            </PostInfo>
            <PostBody>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {data?.body}
                </ReactMarkdown>
            </PostBody>
        </PostContainer>)
    )
}