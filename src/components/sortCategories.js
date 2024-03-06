import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import { sortCategoryData } from '../constants'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { theme2 } from '../theme'

export default function SortCategories({ onSortChange }) {
	const [activeSort, setActiveSort] = useState('Популярные')
	const handleSortChange = sort => {
		setActiveSort(sort)
		onSortChange(sort) // Вызываем функцию из родительского компонента
	}

	const openYandexMaps = () => {
    const location = 'Donetsk'; // Укажите конкретное местоположение или координаты
    const yandexMapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(location)}`;

    Linking.openURL(yandexMapsUrl);
  };
	return (
		<View className='flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 px-4 space-x-2'>
			{sortCategoryData.map((sort, index) => {
				let isActive = sort == activeSort
				let activeButtonClass = isActive ? 'bg-black shadow' : ''
				return (
					<TouchableOpacity
						onPress={() => handleSortChange(sort)}
						key={index}
						className={`p-3 px-4 rounded-full flex  ${activeButtonClass}`}
					>
						<Text
							className='font-semibold'
							style={{
								fontSize: wp(5),
								color: isActive ? theme2.text : 'rgba(0,0,0,0.6)',
							}}
						>
							{sort}
						</Text>
					</TouchableOpacity>
				)
			})}
			<TouchableOpacity onPress={openYandexMaps}>
				<Text
					className='font-semibold'
					style={{
						fontSize: wp(5),
						color: 'rgba(0,0,0,0.6)',
					}}
				>
					Больше
				</Text>
			</TouchableOpacity>
		</View>
	)
}
