import React from "react";
import "./Post.css";
import Card from "../../components/Card/Card";

export default function Post(props) {
    const { post } = props;

    return(
        <article key={post.id}>
            <Card>

            </Card>
        </article>
    )
}