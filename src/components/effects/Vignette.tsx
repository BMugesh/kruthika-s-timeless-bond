const Vignette = () => {
    return (
        <div
            className="fixed inset-0 pointer-events-none z-[9998]"
            style={{
                background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10, 15, 30, 0.6) 100%)',
            }}
        />
    );
};

export default Vignette;
