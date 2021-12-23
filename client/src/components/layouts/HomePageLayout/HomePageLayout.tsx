import React from 'react';
import { useSelector } from 'react-redux';
import { selectHub } from '../../../store/selectors';
import { IHub, IHubState } from '../../../@types';

import {
    Chip,
    Box,
    Typography,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    LinearProgress,
} from '@mui/material';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHub } from '../../../store/actions/hub/hubActions';

import PropTypes from 'prop-types';
import moment from 'moment';

const statusContent = (status: string) => {
    switch (status) {
        case "InProgress":
            return (
                <Chip
                    label="IN PROGRESS"
                    sx={{ color: 'green', height: 'auto !important' }}
                />
            );
        case "Scheduled":
            return (
                <Chip
                    label="SCHEDULED"
                    sx={{ color: 'gray', height: 'auto !important' }}
                />
            );
        case "Completed":
            return (
                <Chip
                    label="COMPLETED"
                    sx={{ color: 'blue', height: 'auto !important' }}
                />
            );
    }
};
function LinearProgressWithLabel(props: any) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100px', mr: 1 }}>
                <LinearProgress
                    variant="determinate"
                    sx={{ height: '10px', borderRadius: '5px' }}
                    color="success"
                    {...props}
                />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >{`${props.value}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};
const HomePageLayout = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHub());
    }, [dispatch]);

    const rows: IHubState = useSelector(selectHub);
    return (
        <>
            <Container maxWidth="lg">
                <Box mt={5} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h4">Accelerate Hub</Typography>
                    <Chip label="SCHEDULE" color="primary" />
                </Box>

                <TableContainer>
                    <Table sx={{ minWidth: 950 }} aria-label="simple table">
                        <TableHead sx={{ mb: 2, boxShadow: 2 }}>
                            <TableRow>
                                <TableCell>Code</TableCell>
                                <TableCell>Program Date</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Voyage</TableCell>
                                <TableCell>Containers</TableCell>
                                <TableCell>Containers Remaining</TableCell>
                                <TableCell>Progress</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rows.hubs.map((row: IHub) => (
                                    <TableRow key={row.code}>
                                        <TableCell component="th" scope="row">
                                            {row.code}
                                        </TableCell>
                                        <TableCell>{`${moment(row.programDateStart).format(
                                            'MMMM D'
                                        )} - ${moment(row.programDateEnd).format(
                                            'MMMM D'
                                        )}`}</TableCell>
                                        <TableCell>{statusContent(row.status)}</TableCell>
                                        <TableCell>{row.voyage}</TableCell>
                                        <TableCell>{row.containers}</TableCell>
                                        <TableCell>{row.containersRemaining}</TableCell>
                                        <TableCell>
                                            <LinearProgressWithLabel value={row.progress} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default HomePageLayout;
