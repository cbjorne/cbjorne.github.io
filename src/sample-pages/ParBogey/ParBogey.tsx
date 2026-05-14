import { useState } from 'react';
import styles from './ParBogey.module.css';

type Category = 'All' | 'Polos' | 'Outerwear' | 'Bottoms' | 'Accessories' | 'Footwear';

interface Product {
    id: number;
    name: string;
    price: string;
    category: Category;
    image: string; // place file at ./imgs/<slug>.jpg when ready
    imageDescription: string;
    badge?: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Classic Performance Polo',
        price: '$89.99',
        category: 'Polos',
        image: '/parbogey/classicperformancepolo.png', // ./imgs/classic-performance-polo.jpg
        imageDescription: 'A crisp black polo shirt with gold embroidered ParBogeyApparel logo on the chest, displayed on a white mannequin against a clean studio background.',
        badge: 'Best Seller',
    },
    {
        id: 2,
        name: 'Gold Stripe Tour Polo',
        price: '$94.99',
        category: 'Polos',
        image: '/parbogey/goldstripetourpolo.png', // ./imgs/gold-stripe-tour-polo.jpg
        imageDescription: 'A black performance polo with thin gold horizontal stripes running across the chest and sleeves, shown laid flat on a dark surface.',
    },
    {
        id: 3,
        name: 'Fairway Moisture-Wicking Polo',
        price: '$79.99',
        category: 'Polos',
        image: '/parbogey/fairwaymoisterwickingpolo.png', // ./imgs/fairway-moisture-wicking-polo.jpg
        imageDescription: 'A solid gold-colored polo shirt made from moisture-wicking fabric, with a black ParBogeyApparel logo embroidered on the left chest.',
    },
    {
        id: 4,
        name: 'ProShield Wind Jacket',
        price: '$149.99',
        category: 'Outerwear',
        image: '/parbogey/proshieldwindjacket.png', // ./imgs/proshield-wind-jacket.jpg
        imageDescription: 'A sleek black windbreaker golf jacket with gold zip pulls and gold ParBogeyApparel text across the back, photographed outdoors on a golf course.',
        badge: 'New',
    },
    {
        id: 5,
        name: 'Thermal Vest',
        price: '$119.99',
        category: 'Outerwear',
        image: '/parbogey/thermalvest.png', // ./imgs/thermal-vest.jpg
        imageDescription: 'A quilted black golf vest with gold stitching detail along the seams and a gold zipper, shown on a model standing on a foggy early-morning fairway.',
    },
    {
        id: 6,
        name: 'Tour Stretch Trousers',
        price: '$109.99',
        category: 'Bottoms',
        image: '/parbogey/tourstretchtrousers.png', // ./imgs/tour-stretch-trousers.jpg
        imageDescription: 'Slim-fit black stretch golf trousers with a subtle gold pin-stripe, displayed flat lay on a neutral background with a scorecard nearby.',
        badge: 'New',
    },
    {
        id: 7,
        name: 'Athletic Golf Shorts',
        price: '$69.99',
        category: 'Bottoms',
        image: '/parbogey/athleticgolfshorts.png', // ./imgs/athletic-golf-shorts.jpg
        imageDescription: 'Black athletic-cut golf shorts with a small gold ParBogeyApparel logo near the left thigh pocket, shown on a model mid-swing on a sunny course.',
    },
    {
        id: 8,
        name: 'Signature Tour Cap',
        price: '$39.99',
        category: 'Accessories',
        image: '/parbogey/signaturetourcap.png', // ./imgs/signature-tour-cap.jpg
        imageDescription: 'A structured black golf cap with a gold embroidered "PBA" monogram on the front panel and gold underbrim, photographed against a white background.',
        badge: 'Best Seller',
    },
    {
        id: 9,
        name: 'Leather Golf Glove',
        price: '$34.99',
        category: 'Accessories',
        image: '/parbogey/leathergolfglove.png', // ./imgs/leather-golf-glove.jpg
        imageDescription: 'A premium cabretta leather golf glove in black with gold stitching detail along the fingers, displayed on a hand gripping a golf club grip.',
    },
    {
        id: 10,
        name: 'Performance Golf Belt',
        price: '$44.99',
        category: 'Accessories',
        image: '/parbogey/performancegolfbelt.png', // ./imgs/performance-golf-belt.jpg
        imageDescription: 'A black stretch golf belt with a gold-plated ParBogeyApparel logo buckle, coiled and photographed on a dark wood surface.',
    },
    {
        id: 11,
        name: 'Tour Knit Socks (3-Pack)',
        price: '$29.99',
        category: 'Accessories',
        image: '/parbogey/tourknitsocks.png', // ./imgs/tour-knit-socks.jpg
        imageDescription: 'Three pairs of black ankle golf socks with gold "ParBogeyApparel" text woven into the ankle band, arranged neatly in a flat lay.',
    },
    {
        id: 12,
        name: 'Spikeless Tour Shoe',
        price: '$179.99',
        category: 'Footwear',
        image: '/parbogey/spikelesstourshoe.png', // ./imgs/spikeless-tour-shoe.jpg
        imageDescription: 'A premium black leather spikeless golf shoe with gold hardware eyelets and a gold ParBogeyApparel logo embossed on the heel tab, displayed on a grass surface.',
        badge: 'New',
    },
];

const categories: Category[] = ['All', 'Polos', 'Outerwear', 'Bottoms', 'Accessories', 'Footwear'];

const ParBogeyPage = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const visibleProducts = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

    return (
        <div className={styles.page}>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroImageBox}>
                    <img src="/parbogey/parbogeyhero.png" alt="" />
                    <span className={styles.heroImageLabel}>
                        Hero banner: A wide-angle shot of a golfer in full ParBogeyApparel black-and-gold apparel
                        standing on a lush green fairway at golden hour, club raised after a perfect drive.
                    </span>
                </div>
                <div className={styles.heroContent}>
                    <p className={styles.heroEyebrow}>ParBogeyApparel</p>
                    <h1 className={styles.heroTitle}>Apparel Collection</h1>
                    <p className={styles.heroSubtitle}>
                        Premium golf wear engineered for performance, designed for the course.
                    </p>
                    <span className={styles.launchBadge}>Full Collection Coming Soon</span>
                </div>
            </section>

            {/* Category Filter Bar */}
            <nav className={styles.filterBar} aria-label="Product categories">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.filterBtn} ${cat === activeCategory ? styles.filterBtnActive : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </nav>

            {/* Product Grid */}
            <section className={styles.shopSection}>
                <div className={styles.grid}>
                    {visibleProducts.map((product) => (
                        <article key={product.id} className={styles.card}>
                            {/* Product Image */}
                            {product.image ? (
                                <img src={product.image} alt={product.name} className={styles.productImg} />
                            ) : (
                                <div className={styles.imagePlaceholder}>
                                    <span className={styles.imagePlaceholderLabel}>{product.imageDescription}</span>
                                </div>
                            )}

                            {/* Badges */}
                            <div className={styles.badgeRow}>
                                {product.badge && (
                                    <span className={`${styles.badge} ${product.badge === 'New' ? styles.badgeNew : styles.badgeBest}`}>
                                        {product.badge}
                                    </span>
                                )}
                                <span className={styles.comingSoonPill}>Coming Soon</span>
                            </div>

                            {/* Product Info */}
                            <div className={styles.cardBody}>
                                <span className={styles.cardCategory}>{product.category}</span>
                                <h3 className={styles.cardName}>{product.name}</h3>
                                <p className={styles.cardPrice}>{product.price}</p>
                                <button className={styles.notifyBtn} disabled>
                                    Notify Me When Available
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Email Sign-up Banner */}
            <section className={styles.signupBanner}>
                <div className={styles.signupContent}>
                    <h2 className={styles.signupTitle}>Be the First to Shop</h2>
                    <p className={styles.signupText}>
                        Sign up and get early access when the ParBogeyApparel collection drops.
                    </p>
                    <div className={styles.signupForm}>
                        <input
                            className={styles.signupInput}
                            type="email"
                            placeholder="Enter your email address"
                            disabled
                        />
                        <button className={styles.signupSubmit} disabled>
                            Notify Me
                        </button>
                    </div>
                    <p className={styles.signupDisclaimer}>No spam. Unsubscribe at any time.</p>
                </div>
            </section>

            {/* Footer strip */}
            <footer className={styles.shopFooter}>
                <span className={styles.footerLogo}>ParBogeyApparel</span>
                <span className={styles.footerTagline}>Play Better. Look Better.</span>
            </footer>
        </div>
    );
};

export default ParBogeyPage;