import slider1 from '../assets/images/slider/slider_1.jpg'
import slider2 from '../assets/images/slider/slider_2.jpg'
import award from '../assets/icons/award.png'
import customer from '../assets/icons/customer.png'
import diet from '../assets/icons/diet.png'
import shipping from '../assets/icons/shipping.png'
import fruits from '../assets/images/categories/fruits.jpg'
import juice from '../assets/images/categories/juice.jpg'
import vege from '../assets/images/categories/vege.jpg'
import dried from '../assets/images/categories/dried.jpg'
import prod1 from '../assets/images/products/prod_1.webp'
import prod2 from '../assets/images/products/prod_2.webp'
import prod3 from '../assets/images/products/prod_3.webp'
import prod4 from '../assets/images/products/prod_4.webp'
import prod5 from '../assets/images/products/prod_5.webp'
import prod6 from '../assets/images/products/prod_6.webp'
import prod7 from '../assets/images/products/prod_7.webp'
import prod8 from '../assets/images/products/prod_8.webp'
import prod9 from '../assets/images/products/prod_9.webp'
import prod10 from '../assets/images/products/prod_10.webp'
import prod11 from '../assets/images/products/prod_11.webp'
import prod12 from '../assets/images/products/prod_12.webp'



const initState = {
    mainSlider: [
        {
            text: 'we serve fresh vegetables & fruits',
            p: 'we deliver organic vegetables & fruits',
            img: slider1,
            alt: 'slider_background_1'
        },
        {
            text: '100% fresh & organic foods',
            p: 'we deliver organic vegetables & fruits',
            img: slider2,
            alt: 'slider_background_2'
        },
    ],
    why: [
        {
            icon: shipping,
            heading: 'free shipping',
            span: 'on order over 100 $',
            alt: 'Free shipping',
            bg: '#e4b2d6'
        },
        {
            icon: diet,
            heading: 'always fresh',
            span: 'products well package',
            alt: 'Always Fresh',
            bg: '#dcc698'
        },
        {
            icon: award,
            heading: 'superior quality',
            span: 'quality products',
            alt: 'Superior quality',
            bg: '#a2d1e1'
        },
        {
            icon: customer,
            heading: 'support',
            span: '24/7 support',
            alt: 'Customer Service',
            bg: '#dcd691'
        }
    ],
    categories1: [
        {
            name: "fruits",
            img: fruits,
            alt: 'Fruits'
        },
        {
            name: "vegetables",
            img: vege,
            alt: 'Vegetables'
        }
    ],
    categories2: [
        {
            name: "juices",
            img: juice,
            alt: 'Juices'
        },
        {
            name: "dried",
            img: dried,
            alt: 'Dried'
        }
    ],
    products: [
        {
            id: 1,
            img: prod1,
            name: 'bell pepper',
            prevPrice: 120,
            price: 80
        },
        {
            id: 2,
            img: prod2,
            name: 'strawberry',
            price: 120
        },
        {
            id: 3,
            img: prod3,
            name: 'green beans',
            price: 120
        },
        {
            id: 4,
            img: prod4,
            name: 'purple cabbage',
            price: 120
        },
        {
            id: 5,
            img: prod5,
            name: 'tomatoe',
            prevPrice: 120,
            price: 80
        },
        {
            id: 6,
            img: prod6,
            name: 'brocolli',
            price: 120
        },
        {
            id: 7,
            img: prod7,
            name: 'carrots',
            price: 120
        },
        {
            id: 8,
            img: prod8,
            name: 'fruit juice',
            price: 120
        },
        {
            id: 9,
            img: prod9,
            name: 'onion',
            prevPrice: 120,
            price: 80
        },
        {
            id: 10,
            img: prod10,
            name: 'apple',
            price: 120
        },
        {
            id: 11,
            img: prod11,
            name: 'garlic',
            price: 120
        },
        {
            id: 12,
            img: prod12,
            name: 'chilli',
            price: 120
        }
    ]
}

export default function reducer(state = initState) {
    return state
}