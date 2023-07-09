import Usercard from "@/components/UserCard"
export const LayoutUser = () => {
	return (
		<div className="flex h-fit w-8/12 flex-col">
			<Usercard 
                nome="Shaolin"
                email="shaolinmatadordeporco@hotmail.com"
                numeroMatches={20}
            />
		</div>
	)
}
