import styles from './Blog.scss';
import CSSModules from 'react-css-modules';
import React, { PureComponent } from 'react';
import RouteTransition from 'components/RouteTransition/RouteTransition';
import { Link } from 'react-router';
import UIButton from 'UILibrary/button/UIButton';
import UILayout from 'UILibrary/layout/UILayout';
import UILoading from 'UILibrary/loading/UILoading';
import UISection from 'UILibrary/layout/UISection';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UIContentCardButton from 'UILibrary/button/UIContentCardButton';

import BlogPostCardPrimary from './BlogPostCardPrimary/BlogPostCardPrimary';
import BlogPostCardSecondary from './BlogPostCardSecondary/BlogPostCardSecondary';
import BlogPostCard from './BlogPostCard/BlogPostCard';

import Helmet from "react-helmet";
import Butter from 'buttercms';
import blogConfig from './config';
const butter = Butter(blogConfig.buttercms_token);


const MEDIA_PRESS_TYPES = [
    {
      title: 'News',
      text: 'Keep up with our press, awards and social media',
      url: '/news',
      buttonText: "See News"
    },
    {
      title: 'Tutorials',
      text: 'Step your programming game up step by step with our alum and mentors',
      url: '/',
      buttonText: "See Tutorials"
    },
    {
      title: 'Spotlight',
      text: 'Hear about the software engineers coming out of our program, from the people employing them',
      url: '/',
      buttonText: "See Spotlight"
    }
];
  
class Blog extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: [],
            currentIndex: 5,
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        let data = butter.post.list({})
            .then(response => {
                if (response.status == 200) {
                    console.log(response.data);
                    return response.data.data;
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ blogPosts: data, isLoading: false }))
            .then(() => console.log(this.state.blogPosts))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    renderCards() {
        return MEDIA_PRESS_TYPES.map((item, key) => {
          return (
            <UIFlex
              key={key}
              basis="31%"
              grow={0}
              shrink={0}
              className="index-10 m-sm-bottom-4"
            >
              <Link to={item.url}>
                <UIContentCardButton
                    use="primary"
                  title={item.title}
                  text={item.text}
                  buttonText={item.buttonText}
                />
              </Link>
            </UIFlex>
          )
      })
    }

    loadMorePosts() {
        let { currentIndex, blogPosts } = this.state;
        const INCREASE = 1;
        
        if (blogPosts.length >= currentIndex + INCREASE) {
            currentIndex += INCREASE;
            console.log(blogPosts.length)
            console.log(currentIndex);
            this.setState({ currentIndex: currentIndex })
        }
    }

    render() {

        let { blogPosts, currentIndex, isLoading, error } = this.state;

        let currentPostsShowing = blogPosts.slice(0, currentIndex);

        const primaryBlogPostCard = currentPostsShowing.map((post, index) => {
            if (index == 0) {
                return <BlogPostCardPrimary post={post} key={index} />
            }
        });

        const secondaryBlogPostCards = currentPostsShowing.map((post, index) => {
            console.log("secondary")
            if (index > 0 && index < 4) {
                return <BlogPostCardSecondary post={post} key={index} />
            }
        });

        const defaultBlogPostCards = currentPostsShowing.map((post, index) => {
            console.log("default")
            if (index > 4) {
                return (
                    <UIFlex basis="49%" grow={0} shrink={0} key={index}>
                        <BlogPostCard post={post}  />
                    </UIFlex>
                )
            }
        })

        if (error) {
            console.log(error);
            // TODO: create error page layout
            return (
                <RouteTransition>
                    <h1>Error mate</h1>
                </RouteTransition>
            );
        }

        if (isLoading) {
            // TODO: create loading page layout
            return (
                <RouteTransition>
                    <UILoading />
                </RouteTransition>
            );
        }

        return (
            <RouteTransition>
                <Helmet title="Blog" />
                <UILayout className="p-top-of-page p-bottom-1">
                    <UISection className="index-2">
                        <UIFlexRow justify="space-between" className="m-bottom-6 m-sm-bottom-12">
                            <UIFlex basis="56%" grow={0} shrink={0}>
                                <UIFlexRow className="full-height">
                                    { primaryBlogPostCard }
                                </UIFlexRow>
                            </UIFlex>
                            <UIFlex basis="42%" grow={0} shrink={0}>
                                <UIFlexRow justify="space-between" direction="column" className="full-height">
                                    { secondaryBlogPostCards }
                                </UIFlexRow>
                            </UIFlex>
                        </UIFlexRow>
                    </UISection>
                </UILayout>
                <UILayout use="secondary" className="p-top-6 p-bottom-8">
                    <UISection className="index-2">
                        <UIFlexRow justify="space-between" className="m-bottom-6 m-sm-bottom-12">
                            { defaultBlogPostCards }
                        </UIFlexRow>
                        <UIFlexRow justify="center">
                            <UIButton type="button" use="flat" onClick={this.loadMorePosts.bind(this)}>
                                Load More Posts
                            </UIButton>
                        </UIFlexRow>
                    </UISection>
                </UILayout>
                
                {   // TODO: WIP really flesh out this page and the directions that the links take you
                    /* 
                    <UILayout use="tertiary">
                        <UISection classname="index-3">
                            <UIFlexRow justify="space-between" className="m-bottom-6 m-sm-bottom-12">
                                { this.renderCards() }
                            </UIFlexRow>
                        </UISection>
                    </UILayout> 
                    */
                }
            </RouteTransition>
        )
    }
}

export default CSSModules(Blog, styles);