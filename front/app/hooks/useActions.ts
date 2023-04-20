import { allActions } from "@/store/rootActions";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"
import { useMemo } from 'react';

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}