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
}

export default function reducer(state = initState) {
    return state
}