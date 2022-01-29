import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

/**
 * set isAdmin false as default value
 * if pages == 1, we don't want to display anything
 *
 * [...Array(pages).keys()] turn pages into array form as bellowed
 * pages=3 -> [0,1,2]
 *
 * if !isAdmin is false, then to `/admin/productlist/${x + 1}`
 * else if keyword is exist, then to `/search/${keyword}/page/${x + 1}`
 * else to `/page/${x + 1}`
 */
const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
