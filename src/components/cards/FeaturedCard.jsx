const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="text-center">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default FeatureCard;