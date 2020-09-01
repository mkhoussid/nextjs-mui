import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { ITheme } from '_constants/theme';

const useStyles = makeStyles<ITheme, { isMobile: boolean }>((theme) => ({
    footer: {
        backgroundColor: theme.palette.grey[100],
        display: ({ isMobile }) => (isMobile ? '' : 'flex'),
        alignItems: 'center',
        justifyContent: 'space-around',
    },
}));

export default function Footer() {
    const classes = useStyles({ isMobile: false });
    return (
        <React.Fragment>
            <footer className={classes.footer}>
                <div>
                    <Typography variant='h6' align='center' gutterBottom>
                        {'intl.LOGO'}
                    </Typography>
                    <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
                        {'intl.LAYOUT.FOOTER.ADDRESS'}
                    </Typography>
                    <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
                        {'intl.LAYOUT.FOOTER.PHONE_NUMBERS'}
                    </Typography>
                    <Typography variant={'h4'} align='center' color='textSecondary' component='h2'>
                        {'intl.LAYOUT.FOOTER.SOCIAL_MEDIA'}
                    </Typography>
                    <SocialMediaIcons />
                </div>
            </footer>
        </React.Fragment>
    );
}

const SocialMediaIcons = React.memo(() => (
    <SocialMediaIconsContainer>
        <div></div>
    </SocialMediaIconsContainer>
));

const SocialMediaIconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
