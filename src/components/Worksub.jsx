import { useState, useEffect } from 'react';
import './CSS/News.css';
import './CSS/HelloTag.css';
import './CSS/GetInTouch.css';
import './CSS/Footer.css';
import News from './home/News';
import GetInTouch from './home/GetInTouch';
import Hellotag from './home/Hellotag';
import Footer from './home/Footer';
// Ensure that News, GetInTouch, Hellotag, and Footer do NOT import Worksub to avoid circular dependency.
import {
    Calendar,
    User,
    Clock,
    Heart,
    MessageCircle,
    Share2,
    Mail,
    ArrowRight,
    Tag,
    Menu,
    X,
} from 'lucide-react';

// Blog data (same as before)
const blogData = [
    {
        slug: 'ai-in-healthcare',
        title: 'AI in Healthcare: Revolutionizing Patient Care',
        category: 'Technology',
        bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
        author: 'Jane Doe',
        authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
        date: '2024-06-01',
        readTime: '5 min read',
        excerpt: 'Artificial Intelligence is transforming healthcare, improving diagnostics, and personalizing treatment.',
        content: `<p>Artificial Intelligence (AI) is rapidly changing the landscape of healthcare. From predictive analytics to robotic surgeries, AI is making patient care more efficient and effective.</p>
        <ul>
            <li>Improved diagnostics with machine learning</li>
            <li>Robotic-assisted surgeries</li>
            <li>Personalized treatment plans</li>
        </ul>
        <p>AI is set to revolutionize healthcare in the coming years.</p>`,
        tags: ['AI', 'Healthcare', 'Technology'],
        likes: 12,
        relatedImages: [
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80'
        ],
        comments: [
            {
                id: 1,
                author: 'John Smith',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                date: '2024-06-02',
                content: 'Great insights! AI is truly changing the game.'
            }
        ]
    },
    {
        slug: 'cloud-security-trends',
        title: 'Cloud Security Trends in 2024',
        category: 'Security',
        bannerImage: 'https://images.unsplash.com/photo-1465101178521-c1a4c8a0b3a2?auto=format&fit=crop&w=900&q=80',
        author: 'Alex Johnson',
        authorImage: 'https://randomuser.me/api/portraits/men/45.jpg',
        date: '2024-05-28',
        readTime: '4 min read',
        excerpt: 'Cloud security is evolving with new threats and solutions. Here are the top trends to watch in 2024.',
        content: `<p>With the rise of cloud computing, security has become a top priority for organizations. In 2024, expect to see:</p>
        <ul>
            <li>Zero Trust architectures</li>
            <li>Advanced threat detection</li>
            <li>Automated compliance tools</li>
        </ul>
        <p>Staying ahead of these trends is crucial for protecting sensitive data and maintaining business continuity.</p>`,
        tags: ['Cloud', 'Security', 'Trends'],
        likes: 8,
        relatedImages: [
            'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=600&q=80'
        ],
        comments: [
            {
                id: 1,
                author: 'Maria Lee',
                avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
                date: '2024-05-29',
                content: 'Very informative. Zero Trust is the way forward!'
            }
        ]
    },
    {
        slug: 'remote-work-culture',
        title: 'Building a Remote Work Culture',
        category: 'Business',
        bannerImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
        author: 'Sam Patel',
        authorImage: 'https://randomuser.me/api/portraits/men/54.jpg',
        date: '2024-05-20',
        readTime: '6 min read',
        excerpt: 'Remote work is here to stay. Learn how to build a strong remote work culture for your team.',
        content: `<p>Remote work offers flexibility but requires intentional culture-building. Key strategies include:</p>
        <ul>
            <li>Clear communication channels</li>
            <li>Regular check-ins</li>
            <li>Recognition and rewards</li>
        </ul>
        <p>Organizations that invest in remote culture will see higher engagement and productivity.</p>`,
        tags: ['Remote Work', 'Culture', 'Business'],
        likes: 15,
        relatedImages: [],
        comments: [
            {
                id: 1,
                author: 'Emily Clark',
                avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
                date: '2024-05-21',
                content: 'Remote work has changed my life for the better!'
            }
        ]
    }
];

// Helper to format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

function Worksub() {
    const [selectedSlug, setSelectedSlug] = useState(blogData[0].slug);
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [liked, setLiked] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [comments, setComments] = useState(blogData.find(b => b.slug === blogData[0].slug)?.comments || []);

    const blogPost = blogData.find((item) => item.slug === selectedSlug);
    const otherPosts = blogData.filter((item) => item.slug !== selectedSlug).slice(0, 3);

    useEffect(() => {
        setComments(blogPost?.comments || []);
        setLiked(false);
        setNewComment('');
    }, [selectedSlug, blogPost?.comments]);

    if (!blogPost) {
        return (
            <div className="ws-center">
                <div className="ws-notfound">
                    <div className="ws-notfound-icon">
                        <MessageCircle className="ws-icon" />
                    </div>
                    <h2 className="ws-title">Article Not Found</h2>
                    <p className="ws-desc">The article you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    const handleEmailSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
        }
    };

    const handleLike = () => {
        setLiked((prev) => !prev);
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            const newId = comments.length ? Math.max(...comments.map(c => c.id)) + 1 : 1;
            setComments([
                ...comments,
                {
                    id: newId,
                    author: 'Anonymous',
                    avatar: 'https://ui-avatars.com/api/?name=Anonymous',
                    date: new Date().toISOString().slice(0, 10),
                    content: newComment,
                },
            ]);
            setNewComment('');
        }
    };

    return (
        <div className="ws-root">
            {/* Mobile Sidebar Toggle */}
            <div className="ws-sidebar-toggle">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="ws-sidebar-btn"
                >
                    {sidebarOpen ? <X className="ws-icon" /> : <Menu className="ws-icon" />}
                </button>
            </div>

            {/* Banner Section */}
            <div className="ws-banner">
                <img
                    src={blogPost.bannerImage}
                    alt={blogPost.title}
                    className="ws-banner-img"
                />
                <div className="ws-banner-overlay" />
                <div className="ws-banner-content">
                    <div className="ws-banner-inner">
                        <div className="ws-banner-category">
                            <Tag className="ws-icon-small" />
                            <span className="ws-category-label">
                                {blogPost.category}
                            </span>
                        </div>
                        <h1 className="ws-banner-title">
                            {blogPost.title}
                        </h1>
                        <div className="ws-banner-meta">
                            <div className="ws-banner-author">
                                <img
                                    src={blogPost.authorImage}
                                    alt={blogPost.author}
                                    className="ws-author-img"
                                />
                                <span className="ws-author-name">{blogPost.author}</span>
                            </div>
                            <div className="ws-banner-date">
                                <Calendar className="ws-icon-small" />
                                <span>{formatDate(blogPost.date)}</span>
                            </div>
                            <div className="ws-banner-read">
                                <Clock className="ws-icon-small" />
                                <span>{blogPost.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ws-main">
                <div className="ws-grid">
                    {/* Main Content */}
                    <div className="ws-content">
                        <div className="ws-article">
                            {/* Article Actions */}
                            <div className="ws-article-actions">
                                <div className="ws-actions-left">
                                    <button
                                        onClick={handleLike}
                                        className={`ws-like-btn ${liked ? 'ws-liked' : ''}`}
                                    >
                                        <Heart className={`ws-icon ${liked ? 'ws-heart-fill' : ''}`} />
                                        <span>{blogPost.likes + (liked ? 1 : 0)}</span>
                                    </button>
                                    <button className="ws-comment-btn">
                                        <MessageCircle className="ws-icon" />
                                        <span>{comments.length}</span>
                                    </button>
                                </div>
                                <button className="ws-share-btn">
                                    <Share2 className="ws-icon" />
                                    <span>Share</span>
                                </button>
                            </div>

                            {/* Article Content */}
                            <div className="ws-article-body">
                                <div className="ws-excerpt">
                                    {blogPost.excerpt}
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                            </div>

                            {/* Tags */}
                            <div className="ws-tags">
                                <h4 className="ws-tags-title">Tags</h4>
                                <div className="ws-tags-list">
                                    {blogPost.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="ws-tag"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Related Images */}
                            {blogPost.relatedImages && blogPost.relatedImages.length > 0 && (
                                <div className="ws-related">
                                    <h3 className="ws-related-title">Related Images</h3>
                                    <div className="ws-related-list">
                                        {blogPost.relatedImages.map((image, index) => (
                                            <div key={index} className="ws-related-img-wrap">
                                                <img
                                                    src={image}
                                                    alt={`Related ${index + 1}`}
                                                    className="ws-related-img"
                                                />
                                                <div className="ws-related-img-overlay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Comments Section */}
                            <div className="ws-comments">
                                <h3 className="ws-comments-title">
                                    Comments ({comments.length})
                                </h3>
                                {/* Add Comment Form */}
                                <div className="ws-add-comment">
                                    <textarea
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        placeholder="Write a comment..."
                                        className="ws-comment-input"
                                        rows="4"
                                    />
                                    <button
                                        className="ws-comment-post"
                                        onClick={handleAddComment}
                                    >
                                        Post Comment
                                    </button>
                                </div>
                                {/* Comments List */}
                                <div className="ws-comments-list">
                                    {comments.map((comment) => (
                                        <div key={comment.id} className="ws-comment-item">
                                            <img
                                                src={comment.avatar}
                                                alt={comment.author}
                                                className="ws-comment-avatar"
                                            />
                                            <div className="ws-comment-content">
                                                <div className="ws-comment-meta">
                                                    <h4 className="ws-comment-author">{comment.author}</h4>
                                                    <span className="ws-comment-date">{formatDate(comment.date)}</span>
                                                </div>
                                                <p className="ws-comment-text">{comment.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className={`ws-sidebar ${sidebarOpen ? 'ws-sidebar-open' : ''}`}>
                        <div className="ws-sidebar-inner">
                            {/* Email Newsletter */}
                            <div className="ws-newsletter">
                                <h3 className="ws-newsletter-title">Subscribe to Newsletter</h3>
                                {isSubscribed ? (
                                    <div className="ws-newsletter-success">
                                        <div className="ws-newsletter-icon">
                                            <Mail className="ws-icon-large" />
                                        </div>
                                        <p>Thanks for subscribing!</p>
                                        <p className="ws-newsletter-desc">Check your email for confirmation</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleEmailSubscribe}>
                                        <p className="ws-newsletter-desc">
                                            Get the latest articles and insights delivered to your inbox.
                                        </p>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="ws-newsletter-input"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="ws-newsletter-btn"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* Latest Articles */}
                            <div className="ws-latest">
                                <h3 className="ws-latest-title">Latest Articles</h3>
                                <div className="ws-latest-list">
                                    {otherPosts.map((post) => (
                                        <div
                                            key={post.slug}
                                            className="ws-latest-item"
                                            onClick={() => setSelectedSlug(post.slug)}
                                        >
                                            <div className="ws-latest-img-wrap">
                                                <img
                                                    src={post.bannerImage}
                                                    alt={post.title}
                                                    className="ws-latest-img"
                                                />
                                                <div className="ws-latest-img-overlay" />
                                            </div>
                                            <h4 className="ws-latest-item-title">
                                                {post.title}
                                            </h4>
                                            <div className="ws-latest-meta">
                                                <Calendar className="ws-icon-tiny" />
                                                <span>{formatDate(post.date)}</span>
                                            </div>
                                            <button className="ws-latest-read">
                                                Read more
                                                <ArrowRight className="ws-icon-tiny" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Author Info */}
                            <div className="ws-author">
                                <h3 className="ws-author-title">About the Author</h3>
                                <div className="ws-author-center">
                                    <div className="ws-author-img-wrap">
                                        <img
                                            src={blogPost.authorImage}
                                            alt={blogPost.author}
                                            className="ws-author-img-large"
                                        />
                                        <div className="ws-author-status"></div>
                                    </div>
                                    <h4 className="ws-author-name-large">{blogPost.author}</h4>
                                    <p className="ws-author-desc">
                                        Technology journalist passionate about innovation and digital transformation.
                                    </p>
                                    <div className="ws-author-social">
                                        <button className="ws-author-social-btn ws-author-social-user">
                                            <User className="ws-icon-tiny" />
                                        </button>
                                        <button className="ws-author-social-btn ws-author-social-mail">
                                            <Mail className="ws-icon-tiny" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="ws-sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`ws-mobile-sidebar ${sidebarOpen ? 'ws-mobile-sidebar-open' : ''}`}
            >
                <div className="ws-mobile-sidebar-inner">
                    {/* Email Newsletter */}
                    <div className="ws-mobile-newsletter">
                        <h3 className="ws-newsletter-title">Subscribe to Newsletter</h3>
                        {isSubscribed ? (
                            <div className="ws-newsletter-success">
                                <div className="ws-newsletter-icon">
                                    <Mail className="ws-icon-large" />
                                </div>
                                <p>Thanks for subscribing!</p>
                                <p className="ws-newsletter-desc">Check your email for confirmation</p>
                            </div>
                        ) : (
                            <form onSubmit={handleEmailSubscribe}>
                                <p className="ws-newsletter-desc">
                                    Get the latest articles and insights delivered to your inbox.
                                </p>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="ws-newsletter-input"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="ws-newsletter-btn"
                                >
                                    Subscribe
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Latest Articles */}
                    <div className="ws-mobile-latest">
                        <h3 className="ws-latest-title">Latest Articles</h3>
                        <div className="ws-latest-list">
                            {otherPosts.map((post) => (
                                <div
                                    key={post.slug}
                                    className="ws-latest-item"
                                    onClick={() => {
                                        setSelectedSlug(post.slug);
                                        setSidebarOpen(false);
                                    }}
                                >
                                    <div className="ws-latest-img-wrap">
                                        <img
                                            src={post.bannerImage}
                                            alt={post.title}
                                            className="ws-latest-img"
                                        />
                                        <div className="ws-latest-img-overlay" />
                                    </div>
                                    <h4 className="ws-latest-item-title">
                                        {post.title}
                                    </h4>
                                    <div className="ws-latest-meta">
                                        <Calendar className="ws-icon-tiny" />
                                        <span>{formatDate(post.date)}</span>
                                    </div>
                                    <button className="ws-latest-read">
                                        Read more
                                        <ArrowRight className="ws-icon-tiny" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Author Info */}
                    <div className="ws-mobile-author">
                        <h3 className="ws-author-title">About the Author</h3>
                        <div className="ws-author-center">
                            <div className="ws-author-img-wrap">
                                <img
                                    src={blogPost.authorImage}
                                    alt={blogPost.author}
                                    className="ws-author-img-large"
                                />
                                <div className="ws-author-status"></div>
                            </div>
                            <h4 className="ws-author-name-large">{blogPost.author}</h4>
                            <p className="ws-author-desc">
                                Technology journalist passionate about innovation and digital transformation.
                            </p>
                            <div className="ws-author-social">
                                <button className="ws-author-social-btn ws-author-social-user">
                                    <User className="ws-icon-tiny" />
                                </button>
                                <button className="ws-author-social-btn ws-author-social-mail">
                                    <Mail className="ws-icon-tiny" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="ws-scrolltop"
            >
                <ArrowRight className="ws-icon" style={{ transform: 'rotate(-90deg)' }} />
            </button>

            {/* CSS */}
            <style>{`
                :root {
                    --ws-red: #dc2626;
                    --ws-red-dark: #b91c1c;
                    --ws-red-light: #fee2e2;
                    --ws-red-gradient: linear-gradient(90deg, #dc2626 0%, #b91c1c 100%);
                    --ws-red-gradient-rev: linear-gradient(90deg, #b91c1c 0%, #dc2626 100%);
                    --ws-bg: #fff1f2;
                    --ws-bg-card: #fff;
                    --ws-text: #1e293b;
                    --ws-text-light: #64748b;
                }
                .ws-root {
                    min-height: 100vh;
                    background: var(--ws-bg);
                    font-family: 'Inter', sans-serif;
                }
                .ws-center {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                }
                .ws-notfound {
                    background: var(--ws-bg-card);
                    border-radius: 1rem;
                    box-shadow: 0 2px 16px rgba(220,38,38,0.08);
                    padding: 2rem;
                    max-width: 400px;
                    text-align: center;
                }
                .ws-notfound-icon {
                    width: 4rem;
                    height: 4rem;
                    background: var(--ws-red-light);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                }
                .ws-title {
                    font-size: 2rem;
                    font-weight: bold;
                    color: var(--ws-red-dark);
                    margin-bottom: 1rem;
                }
                .ws-desc {
                    color: var(--ws-text-light);
                }
                .ws-sidebar-toggle {
                    position: fixed;
                    top: 1rem;
                    right: 1rem;
                    z-index: 50;
                    display: none;
                }
                .ws-sidebar-btn {
                    background: var(--ws-bg-card);
                    padding: 0.75rem;
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(220,38,38,0.08);
                    transition: box-shadow 0.2s;
                    border: none;
                }
                .ws-banner {
                    position: relative;
                    height: 16rem;
                    overflow: hidden;
                }
                .ws-banner-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.7s;
                }
                .ws-banner-img:hover {
                    transform: scale(1.05);
                }
                .ws-banner-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(220,38,38,0.7) 0%, rgba(220,38,38,0.3) 60%, transparent 100%);
                }
                .ws-banner-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 1rem;
                    color: #fff;
                }
                .ws-banner-inner {
                    max-width: 900px;
                    margin: 0 auto;
                }
                .ws-banner-category {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }
                .ws-category-label {
                    background: var(--ws-red);
                    padding: 0.25rem 0.75rem;
                    border-radius: 999px;
                    font-size: 0.85rem;
                    font-weight: 500;
                    box-shadow: 0 2px 8px rgba(220,38,38,0.08);
                    color: #fff;
                }
                .ws-banner-title {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }
                .ws-banner-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    font-size: 0.95rem;
                }
                .ws-banner-author {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .ws-author-img {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    border: 2px solid #fff;
                }
                .ws-author-name {
                    font-weight: 500;
                }
                .ws-banner-date, .ws-banner-read {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }
                .ws-main {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem 1rem;
                }
                .ws-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                .ws-content {
                    order: 2;
                }
                .ws-sidebar {
                    order: 1;
                    display: none;
                }
                .ws-sidebar-inner {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .ws-article {
                    background: var(--ws-bg-card);
                    border-radius: 1rem;
                    box-shadow: 0 2px 16px rgba(220,38,38,0.08);
                    padding: 2rem;
                }
                .ws-article-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid #fee2e2;
                }
                .ws-actions-left {
                    display: flex;
                    gap: 1rem;
                }
                .ws-like-btn, .ws-comment-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 999px;
                    border: none;
                    background: var(--ws-red-light);
                    color: var(--ws-red-dark);
                    font-weight: 500;
                    transition: background 0.2s, transform 0.2s;
                }
                .ws-like-btn:hover, .ws-comment-btn:hover {
                    background: #fecaca;
                    transform: scale(1.05);
                }
                .ws-liked {
                    background: var(--ws-red);
                    color: #fff;
                    box-shadow: 0 2px 8px rgba(220,38,38,0.08);
                }
                .ws-heart-fill {
                    fill: var(--ws-red);
                }
                .ws-share-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 999px;
                    background: var(--ws-red-gradient);
                    color: #fff;
                    font-weight: 500;
                    border: none;
                    box-shadow: 0 2px 8px rgba(220,38,38,0.08);
                    transition: background 0.2s, transform 0.2s;
                }
                .ws-share-btn:hover {
                    background: var(--ws-red-gradient-rev);
                    transform: scale(1.05);
                }
                .ws-article-body {
                    margin-bottom: 2rem;
                }
                .ws-excerpt {
                    font-size: 1.1rem;
                    color: var(--ws-red-dark);
                    margin-bottom: 1.5rem;
                    background: #fee2e2;
                    border-left: 4px solid var(--ws-red);
                    border-radius: 0.5rem;
                    padding: 1rem;
                }
                .ws-tags {
                    margin-top: 2rem;
                    padding-top: 1rem;
                    border-top: 1px solid #fee2e2;
                }
                .ws-tags-title {
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: var(--ws-red-dark);
                    margin-bottom: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .ws-tags-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                .ws-tag {
                    padding: 0.25rem 0.75rem;
                    background: linear-gradient(90deg, #fee2e2 0%, #fecaca 100%);
                    color: var(--ws-red-dark);
                    border-radius: 999px;
                    font-size: 0.95rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .ws-tag:hover {
                    background: linear-gradient(90deg, #fecaca 0%, #fee2e2 100%);
                }
                .ws-related {
                    margin-top: 2rem;
                }
                .ws-related-title {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: var(--ws-red-dark);
                    margin-bottom: 1rem;
                }
                .ws-related-list {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                .ws-related-img-wrap {
                    position: relative;
                    overflow: hidden;
                    border-radius: 0.75rem;
                }
                .ws-related-img {
                    width: 100%;
                    height: 12rem;
                    object-fit: cover;
                    transition: transform 0.3s;
                }
                .ws-related-img-wrap:hover .ws-related-img {
                    transform: scale(1.1);
                }
                .ws-related-img-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(220,38,38,0.2);
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                .ws-related-img-wrap:hover .ws-related-img-overlay {
                    opacity: 1;
                }
                .ws-comments {
                    margin-top: 2rem;
                    padding-top: 1rem;
                    border-top: 1px solid #fee2e2;
                }
                .ws-comments-title {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: var(--ws-red-dark);
                    margin-bottom: 1rem;
                }
                .ws-add-comment {
                    margin-bottom: 1.5rem;
                }
                .ws-comment-input {
                    width: 100%;
                    padding: 1rem;
                    border: 1px solid #fecaca;
                    border-radius: 0.75rem;
                    resize: none;
                    font-size: 1rem;
                    margin-bottom: 0.75rem;
                    transition: border 0.2s, box-shadow 0.2s;
                }
                .ws-comment-input:focus {
                    outline: none;
                    border-color: var(--ws-red);
                    box-shadow: 0 0 0 2px #dc262633;
                }
                .ws-comment-post {
                    padding: 0.5rem 1.5rem;
                    background: var(--ws-red-gradient);
                    color: #fff;
                    border-radius: 0.75rem;
                    font-weight: 500;
                    border: none;
                    box-shadow: 0 2px 8px rgba(220,38,38,0.08);
                    transition: background 0.2s, transform 0.2s;
                }
                .ws-comment-post:hover {
                    background: var(--ws-red-gradient-rev);
                    transform: scale(1.05);
                }
                .ws-comments-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .ws-comment-item {
                    display: flex;
                    gap: 1rem;
                    background: #fff1f2;
                    border-radius: 0.75rem;
                    padding: 1rem;
                }
                .ws-comment-avatar {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    border: 2px solid #fff;
                }
                .ws-comment-content {
                    flex: 1;
                }
                .ws-comment-meta {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }
                .ws-comment-author {
                    font-weight: 500;
                    color: var(--ws-red-dark);
                }
                .ws-comment-date {
                    color: var(--ws-text-light);
                    font-size: 0.95rem;
                }
                .ws-comment-text {
                    color: var(--ws-text);
                }
                .ws-newsletter, .ws-latest, .ws-author {
                    background: var(--ws-bg-card);
                    border-radius: 1rem;
                    box-shadow: 0 2px 16px rgba(220,38,38,0.08);
                    padding: 1.5rem;
                }
                .ws-newsletter-title, .ws-latest-title, .ws-author-title {
                    font-size: 1.1rem;
                    font-weight: bold;
                    color: var(--ws-red-dark);
                    margin-bottom: 1rem;
                }
                .ws-newsletter-success {
                    color: var(--ws-red);
                    text-align: center;
                    padding: 1rem 0;
                }
                .ws-newsletter-icon {
                    width: 4rem;
                    height: 4rem;
                    background: var(--ws-red-light);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                }
                .ws-newsletter-desc {
                    color: var(--ws-text-light);
                    font-size: 0.95rem;
                    margin-bottom: 1rem;
                }
                .ws-newsletter-input {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #fecaca;
                    border-radius: 0.75rem;
                    margin-bottom: 0.75rem;
                    font-size: 1rem;
                    transition: border 0.2s, box-shadow 0.2s;
                }
                .ws-newsletter-input:focus {
                    outline: none;
                    border-color: var(--ws-red);
                    box-shadow: 0 0 0 2px #dc262633;
                }
                .ws-newsletter-btn {
                    width: 100%;
                    padding: 0.75rem;
                    background: var(--ws-red-gradient);
                    color: #fff;
                    border-radius: 0.75rem;
                    font-weight: 500;
                    border: none;
                    box-shadow: 0 2px 8px rgba(220,38,38,0.08);
                    transition: background 0.2s, transform 0.2s;
                }
                .ws-newsletter-btn:hover {
                    background: var(--ws-red-gradient-rev);
                    transform: scale(1.05);
                }
                .ws-latest-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .ws-latest-item {
                    cursor: pointer;
                    transition: box-shadow 0.2s;
                }
                .ws-latest-item:hover .ws-latest-item-title {
                    color: var(--ws-red);
                }
                .ws-latest-img-wrap {
                    position: relative;
                    overflow: hidden;
                    border-radius: 0.75rem;
                    margin-bottom: 0.5rem;
                }
                .ws-latest-img {
                    width: 100%;
                    height: 6rem;
                    object-fit: cover;
                    transition: transform 0.3s;
                }
                .ws-latest-img-wrap:hover .ws-latest-img {
                    transform: scale(1.1);
                }
                .ws-latest-img-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(220,38,38,0.2);
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                .ws-latest-img-wrap:hover .ws-latest-img-overlay {
                    opacity: 1;
                }
                .ws-latest-item-title {
                    font-weight: 500;
                    font-size: 1rem;
                    margin-bottom: 0.25rem;
                    transition: color 0.2s;
                }
                .ws-latest-meta {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    color: var(--ws-text-light);
                    font-size: 0.95rem;
                    margin-bottom: 0.25rem;
                }
                .ws-latest-read {
                    color: var(--ws-red);
                    font-size: 0.95rem;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-weight: 500;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: color 0.2s, gap 0.2s;
                }
                .ws-latest-item:hover .ws-latest-read {
                    color: var(--ws-red-dark);
                    gap: 0.5rem;
                }
                .ws-author-center {
                    text-align: center;
                }
                .ws-author-img-wrap {
                    position: relative;
                    display: inline-block;
                    margin-bottom: 1rem;
                }
                .ws-author-img-large {
                    width: 5rem;
                    height: 5rem;
                    border-radius: 50%;
                    border: 4px solid #fee2e2;
                }
                .ws-author-status {
                    position: absolute;
                    bottom: -0.25rem;
                    right: -0.25rem;
                    width: 1.5rem;
                    height: 1.5rem;
                    background: var(--ws-red);
                    border-radius: 50%;
                    border: 2px solid #fff;
                }
                .ws-author-name-large {
                    font-weight: 500;
                    color: var(--ws-red-dark);
                    margin-bottom: 0.5rem;
                }
                .ws-author-desc {
                    color: var(--ws-text-light);
                    font-size: 0.95rem;
                }
                .ws-author-social {
                    margin-top: 1rem;
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                }
                .ws-author-social-btn {
                    padding: 0.5rem;
                    border-radius: 50%;
                    border: none;
                    background: var(--ws-red-light);
                    color: var(--ws-red-dark);
                    transition: background 0.2s;
                }
                .ws-author-social-user {
                    background: #fee2e2;
                    color: var(--ws-red);
                }
                .ws-author-social-user:hover {
                    background: #fecaca;
                }
                .ws-author-social-mail:hover {
                    background: #fecaca;
                }
                .ws-scrolltop {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    background: var(--ws-red);
                    color: #fff;
                    padding: 0.75rem;
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(220,38,38,0.08);
                    border: none;
                    transition: background 0.2s, transform 0.2s;
                    z-index: 30;
                }
                .ws-scrolltop:hover {
                    background: var(--ws-red-dark);
                    transform: scale(1.1);
                }
                .ws-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                }
                .ws-icon-small {
                    width: 1rem;
                    height: 1rem;
                }
                .ws-icon-tiny {
                    width: 0.85rem;
                    height: 0.85rem;
                }
                .ws-icon-large {
                    width: 2rem;
                    height: 2rem;
                }

                /* Mobile Sidebar Overlay */
                .ws-sidebar-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(220,38,38,0.5);
                    z-index: 40;
                    display: block;
                }
                /* Mobile Sidebar */
                .ws-mobile-sidebar {
                    position: fixed;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 20rem;
                    background: var(--ws-bg-card);
                    box-shadow: -2px 0 16px rgba(220,38,38,0.08);
                    transform: translateX(100%);
                    transition: transform 0.3s;
                    z-index: 50;
                    overflow-y: auto;
                    display: block;
                }
                .ws-mobile-sidebar-open {
                    transform: translateX(0);
                }
                .ws-mobile-sidebar-inner {
                    padding: 1rem 1rem 2rem 1rem;
                }
                .ws-mobile-newsletter, .ws-mobile-latest, .ws-mobile-author {
                    margin-bottom: 2rem;
                }

                /* Responsive Styles */
                @media (min-width: 640px) {
                    .ws-banner {
                        height: 20rem;
                    }
                    .ws-related-img {
                        height: 16rem;
                    }
                    .ws-latest-img {
                        height: 8rem;
                    }
                }
                @media (min-width: 768px) {
                    .ws-banner {
                        height: 24rem;
                    }
                    .ws-main {
                        padding: 3rem 2rem;
                    }
                    .ws-grid {
                        grid-template-columns: 2fr 1fr;
                    }
                    .ws-content {
                        order: 1;
                    }
                    .ws-sidebar {
                        order: 2;
                        display: block;
                    }
                    .ws-sidebar-toggle {
                        display: none;
                    }
                    .ws-mobile-sidebar, .ws-sidebar-overlay {
                        display: none;
                    }
                    .ws-related-list {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                @media (min-width: 1024px) {
                    .ws-banner {
                        height: 32rem;
                    }
                    .ws-main {
                        padding: 4rem 2rem;
                    }
                    .ws-grid {
                        grid-template-columns: 3fr 1fr;
                    }
                }
                @media (max-width: 767px) {
                    .ws-sidebar-toggle {
                        display: block;
                    }
                    .ws-sidebar {
                        display: none;
                    }
                }
            `}</style>
            <News />
            <GetInTouch />
            <Hellotag />
            <Footer />
        </div>
    );
}

export default Worksub;
