import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	Image,
	Platform,
	TextInput,
} from 'react-native'
import React, { useState } from 'react'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/categories'
import SortCategories from '../components/sortCategories'
import Destinations from '../components/destinations'

const ios = Platform.OS == 'ios'
const topMargin = ios ? 'mt-3' : 'mt-10'

export default function HomeScreen() {
	const [currentSort, setCurrentSort] = useState('Популярные')
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCategory, setSelectedCategory] = useState(null)
	const handleSortChange = sort => {
		setCurrentSort(sort)
	}
	return (
		<SafeAreaView className='flex-1 bg-black'>
			<ScrollView
				showsVerticalScrollIndicator={false}
				className={'space-y-6 ' + topMargin}
			>
				{/* avatar */}
				<View className='mx-5 flex-row justify-between items-center mb-10'>
					<Text
						style={{ fontSize: wp(7) }}
						className='font-bold text-white text-opacity-100'
					>
						Исторические места
					</Text>
					<TouchableOpacity>
						<Image
							source={require('../../assets/images/avatar.png')}
							style={{ height: wp(12), width: wp(12) }}
						/>
					</TouchableOpacity>
				</View>

				{/* search bar */}
				<View className='mx-5 mb-4'>
					<View className='flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6'>
						<MagnifyingGlassIcon size={20} strokeWidth={3} color='gray' />
						<TextInput
							placeholder='Найти'
							placeholderTextColor={'gray'}
							onChangeText={text => setSearchQuery(text)}
							className='flex-1 font-bold text-xl  mb-1 pl-1 tracking-wider'
						/>
					</View>
				</View>

				{/* categories */}
				<View className='mb-4'>
					<Categories
						selectedCategory={selectedCategory}
						setCategory={setSelectedCategory}
					/>
				</View>

				{/* sort categories */}
				<View className='mb-4'>
					<SortCategories onSortChange={handleSortChange} />
				</View>

				{/* destinations */}
				<View>
					<Destinations
						currentSort={currentSort}
						selectedCategory={selectedCategory}
						searchQuery={searchQuery}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
