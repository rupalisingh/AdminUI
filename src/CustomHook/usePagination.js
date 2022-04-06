import {useState} from "react";
import PropTypes from "prop-types";

const usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemCount = data.length
    const pageCount = Math.ceil(itemCount/itemsPerPage)
    const getCurrentData = () => {
        const start = (currentPage-1) * itemsPerPage
        const end = start + itemsPerPage
        return data.slice(start,end)
    }
    return {
        currentPage, getCurrentData, setCurrentPage, pageCount
    }
}


usePagination.propTypes = {
    data : PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    itemsPerPage : PropTypes.number.isRequired
}

export default usePagination