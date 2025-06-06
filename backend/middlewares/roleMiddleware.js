module.exports = (requiredRole) => {
  return (req, res, next) => {
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ 
        success: false,
        error: 'Không có quyền truy cập' 
      });
    }
    next();
  };
};