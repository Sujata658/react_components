import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons'


const pictures = [
    {
        'id': 1,
        'src': 'https://picsum.photos/id/1018/800/600',
    },
    {
        'id': 2,
        'src': 'https://picsum.photos/id/1025/800/600',
    },
    {
        'id': 3,
        'src': 'https://picsum.photos/id/1035/800/600',
    },
    {
        'id': 4,
        'src': 'https://picsum.photos/id/1040/800/600',
    },
];

const icons = {
    left: <FontAwesomeIcon icon={faChevronLeft} />,
    right: <FontAwesomeIcon icon={faChevronRight} />,
    hollowCircle: <FontAwesomeIcon icon={faCircleDot} />,
    filledCircle: <FontAwesomeIcon icon={faCircle} />,
};


export default pictures;
export {icons};
