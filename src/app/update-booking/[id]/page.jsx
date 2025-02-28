const UpdateBooking = async({params}) => {
    const {id} = await params;
    console.log(id);

    return (
        <div className="pt-20 pb-10">
            UpdateBooking
        </div>
    );
};

export default UpdateBooking;