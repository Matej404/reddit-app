import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaReddit } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/redditSlice";

export default function Header() {
    const [searchTermLocal, setSearchTermLocal] = useState("");
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    }


    useEffect(() => {
        setSearchTermLocal(searchTerm)
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal))
    }

    return(
        <header>
            <div className="logo">
                <FaReddit className="logo-icon" />
                Reddit<span>Minimal</span>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input type="text"
                       placeholder="search"
                       value={searchTermLocal}
                       onChange={onSearchTermChange} />
                <button type="submit" aria-label="Search" onSubmit={onSearchTermSubmit}>
                    <HiOutlineSearch />
                </button>
            </form>
        </header>
    )
}