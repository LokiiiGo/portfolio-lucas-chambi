export default function Rodape() {
    return (
        <footer className="py-12 px-6 border-t border-border/50">
            <div className="container mx-auto text-center text-muted-foreground">
                <p className="text-2xl">
                    &copy; {new Date().getFullYear()} Portifólio - Lucas Chambi
                </p>
            </div>
        </footer>
    )
}