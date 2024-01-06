class ApiResponse
{
    static success(res, data, message = 'Success', status = 200)
    {
        res.status(status).json({ success: true, data, message });
    }

    static error(res, error, message = 'Error', status = 500)
    {
        res.status(status).json({ success: false, error: { message: error.message, status }, message });
    }
}