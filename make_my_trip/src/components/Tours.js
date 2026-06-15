function Tours({ tours }) {

    return (
        <div>
            <div>
                <h2>Plan For Trip</h2>
            </div>

            {
                tours.map((tour) => {
                    return <card> {...tour}</card>
                })

            }

        </div>
    )

}

export default Tours;