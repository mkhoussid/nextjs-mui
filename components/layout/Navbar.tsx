import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '_constants/theme';

const useStyles = makeStyles<ITheme, { isScroll: boolean }>((theme) => ({
    root: ({ isScroll }) => ({
        // flexGrow: 1,
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: isScroll ? '100%' : '4rem',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '0 0 1rem 1rem',
        transition: isScroll ? '1s' : '0.4s',
    }),
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    toolBar: ({ isScroll }) => ({
        minHeight: isScroll ? '100vh' : '4rem',
        // justifyContent: 'space-between',
        flexDirection: 'column',
        transition: '1s',
        backgroundColor: isScroll ? theme.palette.primary.main : theme.palette.secondary.main,
    }),
}));

type TNavbar = {
    isScroll: boolean;
};
export default function Navbar({ isScroll }: TNavbar) {
    const classes = useStyles({ isScroll });

    return (
        <div className={classes.root}>
            {isScroll ? (
                <div style={{ position: 'absolute' }}>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                    <div>asdasd</div>
                </div>
            ) : null}
        </div>
    );
}

const LogoContainer = styled.span<{}>``;
