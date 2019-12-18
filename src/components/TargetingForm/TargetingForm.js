import React from 'react';
import {
  Group,
  FormLayout,
  FormLayoutGroup,
  Textarea,
  Select,
  Radio
} from '@vkontakte/vkui';
import Icon12Lock from '@vkontakte/icons/dist/12/lock';

const TargetingFrom = (props) => {
  return (
    <Group id='targetingForm' title='Аудитория'>
      <p className="form_description">
        Настройте показ виджета на свою целевую аудиторию,
        чтобы получить больше кликов по виджету и повысить конверсию
      </p>
      <FormLayout>
        <Select value='a' top="Пол" placeholder="Выберите пол">
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
          <option value="a">Любой</option>
        </Select>
        <FormLayoutGroup className='clearfix' top="Возраст">
          <Select className='age_from' name="age_from" placeholder='от'>
            <option value="1">от 1</option>
            <option value="2">от 2</option>
            <option value="3">от 3</option>
            <option value="4">от 4</option>
            <option value="5">от 5</option>
            <option value="6">от 6</option>
            <option value="7">от 7</option>
            <option value="8">от 8</option>
            <option value="9">от 9</option>
            <option value="10">от 10</option>
            <option value="11">от 11</option>
            <option value="12">от 12</option>
            <option value="13">от 13</option>
            <option value="14">от 14</option>
            <option value="15">от 15</option>
            <option value="16">от 16</option>
            <option value="17">от 17</option>
            <option value="18">от 18</option>
            <option value="19">от 19</option>
            <option value="20">от 20</option>
            <option value="21">от 21</option>
            <option value="22">от 22</option>
            <option value="23">от 23</option>
            <option value="24">от 24</option>
            <option value="25">от 25</option>
            <option value="26">от 26</option>
            <option value="27">от 27</option>
            <option value="28">от 28</option>
            <option value="29">от 29</option>
            <option value="30">от 30</option>
            <option value="31">от 31</option>
            <option value="32">от 32</option>
            <option value="33">от 33</option>
            <option value="34">от 34</option>
            <option value="35">от 35</option>
            <option value="36">от 36</option>
            <option value="37">от 37</option>
            <option value="38">от 38</option>
            <option value="39">от 39</option>
            <option value="40">от 40</option>
            <option value="41">от 41</option>
            <option value="42">от 42</option>
            <option value="43">от 43</option>
            <option value="44">от 44</option>
            <option value="45">от 45</option>
            <option value="46">от 46</option>
            <option value="47">от 47</option>
            <option value="48">от 48</option>
            <option value="49">от 49</option>
            <option value="50">от 50</option>
            <option value="51">от 51</option>
            <option value="52">от 52</option>
            <option value="53">от 53</option>
            <option value="54">от 54</option>
            <option value="55">от 55</option>
            <option value="56">от 56</option>
            <option value="57">от 57</option>
            <option value="58">от 58</option>
            <option value="59">от 59</option>
            <option value="60">от 60</option>
            <option value="61">от 61</option>
            <option value="62">от 62</option>
            <option value="63">от 63</option>
            <option value="64">от 64</option>
            <option value="65">от 65</option>
            <option value="66">от 66</option>
            <option value="67">от 67</option>
            <option value="68">от 68</option>
            <option value="69">от 69</option>
            <option value="70">от 70</option>
            <option value="71">от 71</option>
            <option value="72">от 72</option>
            <option value="73">от 73</option>
            <option value="74">от 74</option>
            <option value="75">от 75</option>
            <option value="76">от 76</option>
            <option value="77">от 77</option>
            <option value="78">от 78</option>
            <option value="79">от 79</option>
            <option value="80">от 80</option>
          </Select>
          <Select className='age_to' name='age_to' placeholder='до'>
            <option value="1">до 1</option>
            <option value="2">до 2</option>
            <option value="3">до 3</option>
            <option value="4">до 4</option>
            <option value="5">до 5</option>
            <option value="6">до 6</option>
            <option value="7">до 7</option>
            <option value="8">до 8</option>
            <option value="9">до 9</option>
            <option value="10">до 10</option>
            <option value="11">до 11</option>
            <option value="12">до 12</option>
            <option value="13">до 13</option>
            <option value="14">до 14</option>
            <option value="15">до 15</option>
            <option value="16">до 16</option>
            <option value="17">до 17</option>
            <option value="18">до 18</option>
            <option value="19">до 19</option>
            <option value="20">до 20</option>
            <option value="21">до 21</option>
            <option value="22">до 22</option>
            <option value="23">до 23</option>
            <option value="24">до 24</option>
            <option value="25">до 25</option>
            <option value="26">до 26</option>
            <option value="27">до 27</option>
            <option value="28">до 28</option>
            <option value="29">до 29</option>
            <option value="30">до 30</option>
            <option value="31">до 31</option>
            <option value="32">до 32</option>
            <option value="33">до 33</option>
            <option value="34">до 34</option>
            <option value="35">до 35</option>
            <option value="36">до 36</option>
            <option value="37">до 37</option>
            <option value="38">до 38</option>
            <option value="39">до 39</option>
            <option value="40">до 40</option>
            <option value="41">до 41</option>
            <option value="42">до 42</option>
            <option value="43">до 43</option>
            <option value="44">до 44</option>
            <option value="45">до 45</option>
            <option value="46">до 46</option>
            <option value="47">до 47</option>
            <option value="48">до 48</option>
            <option value="49">до 49</option>
            <option value="50">до 50</option>
            <option value="51">до 51</option>
            <option value="52">до 52</option>
            <option value="53">до 53</option>
            <option value="54">до 54</option>
            <option value="55">до 55</option>
            <option value="56">до 56</option>
            <option value="57">до 57</option>
            <option value="58">до 58</option>
            <option value="59">до 59</option>
            <option value="60">до 60</option>
            <option value="61">до 61</option>
            <option value="62">до 62</option>
            <option value="63">до 63</option>
            <option value="64">до 64</option>
            <option value="65">до 65</option>
            <option value="66">до 66</option>
            <option value="67">до 67</option>
            <option value="68">до 68</option>
            <option value="69">до 69</option>
            <option value="70">до 70</option>
            <option value="71">до 71</option>
            <option value="72">до 72</option>
            <option value="73">до 73</option>
            <option value="74">до 74</option>
            <option value="75">до 75</option>
            <option value="76">до 76</option>
            <option value="77">до 77</option>
            <option value="78">до 78</option>
            <option value="79">до 79</option>
            <option value="80">до 80</option>
          </Select>
        </FormLayoutGroup>
        <FormLayoutGroup className='clearfix' top="День Рождения">
          <Radio className='birthday_radio' value='1' type="radio" name='day'>7 дней</Radio>
          <Radio className='birthday_radio' value='2' type="radio" name='day'>3 дня</Radio>
          <Radio className='birthday_radio' value='3' type="radio" name='day'>сегодня</Radio>
        </FormLayoutGroup>
        <Select top='Семейное положение' placeholder='Выберите семейное положение'>
          <option value="1">не женат/не замужем</option>
          <option value="2">есть друг/есть подруга</option>
          <option value="3">помолвлен/помолвлена</option>
          <option value="4">женат/замужем</option>
          <option value="5">все сложно</option>
          <option value="6">в активном поиске</option>
          <option value="7">влюблен/влюблена</option>
          <option value="8">в гражданском браке</option>
        </Select>
        <Select top='Город' placeholder='Выберите Город'>
          <option value="1">Москва</option>
          <option value="2">Одесса</option>
          <option value="3">Таганрок</option>
          <option value="4">Простоквашино</option>
        </Select>
        <Select top='Устройство' placeholder='Выберите устройство'>
          <option value="1">мобильная версия сайта</option>
          <option value="2">приложение для iPhone</option>
          <option value="3">приложение для Android</option>
          <option value="4">полная версия сайта</option>
        </Select>
        <Textarea
          top='Состоит в сообществе'
          bottom='Кажый номер с новой строки'
          placeholder='Введите ID сообществ'
        />
        <Textarea
          top='Не состоит в сообществе'
          bottom='Кажый номер с новой строки'
          placeholder='Введите ID сообществ'
        />
        <Textarea
          top='ID пользователей'
          bottom='Кажый номер с новой строки'
          placeholder='Введите ID пользователей'
        />
        <Textarea
          top='Интересы второй половинки'
          bottom='Каждое название с новой строки'
          placeholder='Введите ключевые слова'
        />
        <Textarea
          top='Интересы пользователя'
          bottom='Каждое название с новой строки'
          placeholder='Введите ключевые слова'
        />
        <Textarea
          top='Имя пользователя'
          bottom='Каждое Имя с новой строки'
          placeholder='Введите ключевые слова'
        />
        <Textarea
          top={<span className='top_txt'>Фамилия пользователя<Icon12Lock className='icon'/></span>}
          bottom='Каждая Фамилия с новой строки'
          placeholder='Введите ключевые слова'
        />
      </FormLayout>
    </Group>
  )
};

export default TargetingFrom;
