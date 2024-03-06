import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { categoriesData } from '../constants'

export default function Categories({ selectedCategory, setCategory }) {
	const handleShowAllCategories = () => {
		setCategory(null)
	}
	const handleCategoryPress = category => {
		setCategory(category)
	}

	return (
		<View className='space-y-5'>
			<View className='mx-5 flex-row justify-between items-center'>
				<Text
					style={{ fontSize: wp(4) }}
					className='font-semibold text-opacity-70 text-white'
				>
					Категории
				</Text>
				<TouchableOpacity onPress={handleShowAllCategories}>
					<Text
						style={{ fontSize: wp(4) }}
						className='font-semibold text-opacity-70 text-white'
					>
						Смотреть все
					</Text>
				</TouchableOpacity>
			</View>
			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 15 }}
				className='space-x-4'
				showsHorizontalScrollIndicator={false}
			>
				{categoriesData.map((cat, index) => {
					return (
						<TouchableOpacity
							onPress={() => handleCategoryPress(cat.title)}
							key={index}
							className='flex items-center space-y-2 '
						>
							<Image
								source={cat.image}
								className='rounded-3xl'
								style={{ width: wp(20), height: wp(19) }}
							/>
							<Text
								className='text-opacity-70 text-white font-bold'
								style={{ fontSize: wp(3) }}
							>
								{cat.title}
							</Text>
						</TouchableOpacity>
					)
				})}
			</ScrollView>
		</View>
	)
}
