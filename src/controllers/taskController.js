const createTask = (req, res) => {
    const user = new User({
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        duedate: req.body.duedate
    });
    user.save().then((data) => {
        return res.status(200).json({ user: data, message: "Task created successfully" });
    }).catch(err => {
        return res.status(500).send({ message: err });
    });

}

const assignedTask = (req, res) => {
    const getassigned = Task.findOneById({ userId: req.query.userId });
    if (getassigned) {
        return res.status(200).json({ user: getassigned, message: "Task Fetched successfully" });
    }
    else {
        return res.status(201).json({ message: "Task Not Found" });
    }
}