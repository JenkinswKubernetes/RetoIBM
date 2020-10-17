import React from 'react';
import {Grid, Card} from 'semantic-ui-react';

export default function Movie({data}) {
    
    return (
        <>
            <h1>The saga of Star Wars</h1>
            <Grid columns={3}>
                {data.map((movie, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{movie.title}</Card.Header>
                                    <Card.Description>
                                        <strong>Episode</strong>
                                        <p>{movie.episode_id}</p>
                                        <strong>Director</strong>
                                        <p>{movie.director}</p>
                                        <strong>Release Date</strong>
                                        <p>{movie.release_date}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    );
                })}
            </Grid>
        </>
    )
}
