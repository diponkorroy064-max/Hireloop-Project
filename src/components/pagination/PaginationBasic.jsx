"use client";
import { Pagination } from "@heroui/react";
// import { useState } from "react";


export function PaginationBasic({ totalItems, page, setPage}) {
    const itemsPerPage = 12;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // const getPageNumbers = () => {
    //     const pages = [...Array(totalPages).keys()];
    //     return pages;
    // };

    const startItem = (page - 1) * itemsPerPage + 1;
    const endItem = Math.min(page * itemsPerPage, totalItems);


    return (
        <Pagination className="justify-between">
            <Pagination.Summary>
                Showing {startItem}-{endItem} of {totalItems} results
            </Pagination.Summary>

            <Pagination.Content>
                <Pagination.Item>
                    <Pagination.Previous isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
                        <Pagination.PreviousIcon />
                        <span>Previous</span>
                    </Pagination.Previous>
                </Pagination.Item>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Pagination.Item key={p}>
                        <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                            {p}
                        </Pagination.Link>
                    </Pagination.Item>
                ))}
                <Pagination.Item>
                    <Pagination.Next isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
                        <span>Next</span>
                        <Pagination.NextIcon />
                    </Pagination.Next>
                </Pagination.Item>
            </Pagination.Content>
        </Pagination>
    );
}

