const userServices = require('./user.service');

exports.registerUserController = async (req, res) => {
     console.log(req.body);
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({
                error: `Campos obrigatórios incompletos!`
            });
        }

        const result = await userServices.registerUser(nome, email, senha);

        res.status(200).json({
            message: `usuário cadastro com sucesso`,
            result
        })
    } catch (error) {
     res.status(500).json({ error: "Erro ao cadastrar usuário" });
}

};

exports.getAllUsersController = async (req, res) => {
    try {
        const users = await userServices.getAllUsers();
        res.status(200).json({
            users
        })
    } catch (error) {
        res.status(400).json({
            error: `Erro ao acessar os usuários`
        });
    }
};

exports.loginController = async (req, res) => {
    console.log(req.body);
    try {
        const { email, senha } = req.body;
        
        if (!email || !senha) {
            return res.status(400).json({
                error: `Campos obrigatórios incompletos!`
            });
        }

        const result = await userServices.login(email, senha);

        res.status(200).json({
            message: 'login realizado com sucesso',
            user: result.userExists,
            token: result.token
        });
    } catch (error) {
    res.status(401).json({
        error: error.message
    });
}

};